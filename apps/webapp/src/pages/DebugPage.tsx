import { SharedAlert, SharedCard, SharedBadge } from "@monorepo/shared";
import { LocalButton } from "../components/LocalButton";
import { LocalStats } from "../components/LocalStats";

/**
 * Debug page that renders components from both the shared package and the
 * local webapp. If shared-package CSS classes are being culled by Tailwind,
 * the "Shared Components" section will appear unstyled (plain text, no
 * colours / borders / shadows) while the "Local Components" section will
 * look correct.
 *
 * IMPORTANT: We intentionally do NOT spell out the shared-package class
 * names anywhere in this file — doing so would cause Tailwind to pick them
 * up from *this* source file and mask the culling bug.
 */
export function DebugPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-10 p-8">
      <h1 className="text-3xl font-bold text-gray-900">
        CSS Class Debug Page
      </h1>
      <p className="text-gray-500">
        If Tailwind is purging correctly, every component below should be fully
        styled. If shared-package classes are being culled, those components will
        appear unstyled (plain text, no colours/borders/shadows).
      </p>

      {/* ── Local components (webapp) ─────────────────────────── */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Local Components{" "}
          <span className="text-sm font-normal text-gray-400">
            (apps/webapp)
          </span>
        </h2>
        <p className="text-xs text-gray-400">
          These should always be styled correctly because their source lives
          inside the Tailwind content glob.
        </p>
        <LocalButton>Click me (teal button)</LocalButton>
        <LocalStats />
      </section>

      {/* ── Shared components (packages/shared) ──────────────── */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Shared Components{" "}
          <span className="text-sm font-normal text-gray-400">
            (packages/shared)
          </span>
        </h2>
        <p className="text-xs text-gray-400">
          If these appear unstyled, the shared package classes are being culled.
        </p>
        <SharedAlert message="This is an alert from the shared package" />
        <SharedCard title="Shared Card Title">
          This card lives in the shared package. If the indigo/purple gradient
          and border are visible, the CSS was preserved.
        </SharedCard>
        <div className="flex flex-wrap gap-2">
          <SharedBadge label="Default (sky)" />
          <SharedBadge label="Success (emerald)" variant="success" />
          <SharedBadge label="Danger (rose)" variant="danger" />
        </div>
      </section>
    </div>
  );
}
