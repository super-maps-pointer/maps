// @vitest-environment node
import { Global } from "@emotion/react";
import { renderToString } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { EmotionRegistry } from "./emotion-registry";

describe("EmotionRegistry", () => {
  it("keeps Emotion styles out of the server-rendered tree", () => {
    const html = renderToString(
      <EmotionRegistry>
        <Global styles={{ body: { margin: 0 } }} />
        <script id="theme" />
      </EmotionRegistry>,
    );

    expect(html).toBe('<script id="theme"></script>');
  });
});
