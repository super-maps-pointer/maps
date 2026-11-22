"use client";

import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { useServerInsertedHTML } from "next/navigation";
import { type ReactNode, useState } from "react";

interface InsertedStyle {
  name: string;
  isGlobal: boolean;
}

const createRegistry = () => {
  const cache = createCache({ key: "css" });
  cache.compat = true;
  let pending: InsertedStyle[] = [];
  const insert = cache.insert.bind(cache);
  cache.insert = (selector, serialized, sheet, shouldCache) => {
    if (cache.inserted[serialized.name] === undefined) {
      pending.push({ name: serialized.name, isGlobal: selector === "" });
    }
    return insert(selector, serialized, sheet, shouldCache);
  };
  const flush = () => {
    const flushed = pending;
    pending = [];
    return flushed;
  };
  return { cache, flush };
};

export function EmotionRegistry({ children }: { children: ReactNode }) {
  const [{ cache, flush }] = useState(createRegistry);

  useServerInsertedHTML(() => {
    const styleOf = ({ name }: InsertedStyle) => {
      const style = cache.inserted[name];
      return typeof style === "string" ? style : "";
    };
    const inserted = flush();
    const globals = inserted.filter(({ isGlobal }) => isGlobal);
    const scoped = inserted.filter(({ isGlobal }) => !isGlobal);
    if (inserted.length === 0) return null;

    return (
      <>
        {globals.map((style) => (
          <style
            key={style.name}
            data-emotion={`${cache.key}-global ${style.name}`}
            dangerouslySetInnerHTML={{ __html: styleOf(style) }}
          />
        ))}
        {scoped.length > 0 && (
          <style
            data-emotion={[cache.key, ...scoped.map(({ name }) => name)].join(
              " ",
            )}
            dangerouslySetInnerHTML={{ __html: scoped.map(styleOf).join("") }}
          />
        )}
      </>
    );
  });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
