declare module "*.svg" {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}
declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}
declare module "*.png" {
    const value: any;
    export = value;
}

declare module '*.ttf';
declare module '*.woff';
declare module '*.woff2';