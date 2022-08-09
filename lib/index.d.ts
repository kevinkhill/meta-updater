import { ProjectManifest } from '@pnpm/types';
export default function (opts: {
    test?: boolean;
}): Promise<void>;
declare type UpdateFunc = (obj: object, dir: string, manifest: ProjectManifest) => object | Promise<object | null> | null;
declare type UpdateError = {
    expected: Object | null;
    actual: Object | null;
    path: string;
};
export declare function performUpdates(workspaceDir: string, update: Record<string, UpdateFunc>, opts?: {
    test?: boolean;
}): Promise<null | UpdateError>;
export {};
