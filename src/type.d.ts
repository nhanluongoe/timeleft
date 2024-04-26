export {};

declare module "vue" {
  interface ComponentCustomProperties {
    $filters: Record<string, any>;
  }
}
