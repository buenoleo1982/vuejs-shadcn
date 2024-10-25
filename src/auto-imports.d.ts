/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// noinspection JSUnusedGlobalSymbols
// Generated by unplugin-auto-import
// biome-ignore lint: disable
export {}
declare global {
  const *: typeof import('valibot')
  const EffectScope: typeof import('vue')['EffectScope']
  const FieldContextKey: typeof import('vee-validate')['FieldContextKey']
  const FormContextKey: typeof import('vee-validate')['FormContextKey']
  const PingDocument: typeof import('./gql/generated/graphql')['PingDocument']
  const computed: typeof import('vue')['computed']
  const configure: typeof import('vee-validate')['configure']
  const createApp: typeof import('vue')['createApp']
  const customRef: typeof import('vue')['customRef']
  const defineAsyncComponent: typeof import('vue')['defineAsyncComponent']
  const defineComponent: typeof import('vue')['defineComponent']
  const defineRule: typeof import('vee-validate')['defineRule']
  const effectScope: typeof import('vue')['effectScope']
  const getCurrentInstance: typeof import('vue')['getCurrentInstance']
  const getCurrentScope: typeof import('vue')['getCurrentScope']
  const h: typeof import('vue')['h']
  const inject: typeof import('vue')['inject']
  const isProxy: typeof import('vue')['isProxy']
  const isReactive: typeof import('vue')['isReactive']
  const isReadonly: typeof import('vue')['isReadonly']
  const isRef: typeof import('vue')['isRef']
  const markRaw: typeof import('vue')['markRaw']
  const nextTick: typeof import('vue')['nextTick']
  const onActivated: typeof import('vue')['onActivated']
  const onBeforeMount: typeof import('vue')['onBeforeMount']
  const onBeforeRouteLeave: typeof import('vue-router')['onBeforeRouteLeave']
  const onBeforeRouteUpdate: typeof import('vue-router')['onBeforeRouteUpdate']
  const onBeforeUnmount: typeof import('vue')['onBeforeUnmount']
  const onBeforeUpdate: typeof import('vue')['onBeforeUpdate']
  const onDeactivated: typeof import('vue')['onDeactivated']
  const onErrorCaptured: typeof import('vue')['onErrorCaptured']
  const onMounted: typeof import('vue')['onMounted']
  const onRenderTracked: typeof import('vue')['onRenderTracked']
  const onRenderTriggered: typeof import('vue')['onRenderTriggered']
  const onScopeDispose: typeof import('vue')['onScopeDispose']
  const onServerPrefetch: typeof import('vue')['onServerPrefetch']
  const onUnmounted: typeof import('vue')['onUnmounted']
  const onUpdated: typeof import('vue')['onUpdated']
  const onWatcherCleanup: typeof import('vue')['onWatcherCleanup']
  const provide: typeof import('vue')['provide']
  const reactive: typeof import('vue')['reactive']
  const readonly: typeof import('vue')['readonly']
  const ref: typeof import('vue')['ref']
  const resolveComponent: typeof import('vue')['resolveComponent']
  const shallowReactive: typeof import('vue')['shallowReactive']
  const shallowReadonly: typeof import('vue')['shallowReadonly']
  const shallowRef: typeof import('vue')['shallowRef']
  const toRaw: typeof import('vue')['toRaw']
  const toRef: typeof import('vue')['toRef']
  const toRefs: typeof import('vue')['toRefs']
  const toTypedSchema: typeof import('@vee-validate/valibot')['toTypedSchema']
  const toValue: typeof import('vue')['toValue']
  const triggerRef: typeof import('vue')['triggerRef']
  const unref: typeof import('vue')['unref']
  const useAttrs: typeof import('vue')['useAttrs']
  const useCounterStore: typeof import('./stores/counter')['useCounterStore']
  const useCssModule: typeof import('vue')['useCssModule']
  const useCssVars: typeof import('vue')['useCssVars']
  const useField: typeof import('vee-validate')['useField']
  const useFieldArray: typeof import('vee-validate')['useFieldArray']
  const useFieldError: typeof import('vee-validate')['useFieldError']
  const useFieldValue: typeof import('vee-validate')['useFieldValue']
  const useForm: typeof import('vee-validate')['useForm']
  const useFormErrors: typeof import('vee-validate')['useFormErrors']
  const useFormValues: typeof import('vee-validate')['useFormValues']
  const useI18n: typeof import('vue-i18n')['useI18n']
  const useId: typeof import('vue')['useId']
  const useIsFieldDirty: typeof import('vee-validate')['useIsFieldDirty']
  const useIsFieldTouched: typeof import('vee-validate')['useIsFieldTouched']
  const useIsFieldValid: typeof import('vee-validate')['useIsFieldValid']
  const useIsFormDirty: typeof import('vee-validate')['useIsFormDirty']
  const useIsFormTouched: typeof import('vee-validate')['useIsFormTouched']
  const useIsFormValid: typeof import('vee-validate')['useIsFormValid']
  const useIsSubmitting: typeof import('vee-validate')['useIsSubmitting']
  const useLink: typeof import('vue-router/auto')['useLink']
  const useModel: typeof import('vue')['useModel']
  const usePingLazyQuery: typeof import('./gql/generated/graphql')['usePingLazyQuery']
  const usePingQuery: typeof import('./gql/generated/graphql')['usePingQuery']
  const useResetForm: typeof import('vee-validate')['useResetForm']
  const useRoute: typeof import('vue-router')['useRoute']
  const useRouter: typeof import('vue-router')['useRouter']
  const useSlots: typeof import('vue')['useSlots']
  const useSubmitCount: typeof import('vee-validate')['useSubmitCount']
  const useSubmitForm: typeof import('vee-validate')['useSubmitForm']
  const useTemplateRef: typeof import('vue')['useTemplateRef']
  const useValidateField: typeof import('vee-validate')['useValidateField']
  const useValidateForm: typeof import('vee-validate')['useValidateForm']
  const v: typeof import('valibot')['v']
  const validate: typeof import('vee-validate')['validate']
  const vbot: typeof import('valibot')['vbot']
  const watch: typeof import('vue')['watch']
  const watchEffect: typeof import('vue')['watchEffect']
  const watchPostEffect: typeof import('vue')['watchPostEffect']
  const watchSyncEffect: typeof import('vue')['watchSyncEffect']
}
// for type re-export
declare global {
  // @ts-ignore
  export type { Component, ComponentPublicInstance, ComputedRef, DirectiveBinding, ExtractDefaultPropTypes, ExtractPropTypes, ExtractPublicPropTypes, InjectionKey, PropType, Ref, MaybeRef, MaybeRefOrGetter, VNode, WritableComputedRef } from 'vue'
  import('vue')
}
// for vue template auto import
import { UnwrapRef } from 'vue'
declare module 'vue' {
  interface GlobalComponents {}
  interface ComponentCustomProperties {
    readonly EffectScope: UnwrapRef<typeof import('vue')['EffectScope']>
    readonly FieldContextKey: UnwrapRef<typeof import('vee-validate')['FieldContextKey']>
    readonly FormContextKey: UnwrapRef<typeof import('vee-validate')['FormContextKey']>
    readonly PingDocument: UnwrapRef<typeof import('./gql/generated/graphql')['PingDocument']>
    readonly computed: UnwrapRef<typeof import('vue')['computed']>
    readonly configure: UnwrapRef<typeof import('vee-validate')['configure']>
    readonly createApp: UnwrapRef<typeof import('vue')['createApp']>
    readonly customRef: UnwrapRef<typeof import('vue')['customRef']>
    readonly defineAsyncComponent: UnwrapRef<typeof import('vue')['defineAsyncComponent']>
    readonly defineComponent: UnwrapRef<typeof import('vue')['defineComponent']>
    readonly defineRule: UnwrapRef<typeof import('vee-validate')['defineRule']>
    readonly effectScope: UnwrapRef<typeof import('vue')['effectScope']>
    readonly getCurrentInstance: UnwrapRef<typeof import('vue')['getCurrentInstance']>
    readonly getCurrentScope: UnwrapRef<typeof import('vue')['getCurrentScope']>
    readonly h: UnwrapRef<typeof import('vue')['h']>
    readonly inject: UnwrapRef<typeof import('vue')['inject']>
    readonly isProxy: UnwrapRef<typeof import('vue')['isProxy']>
    readonly isReactive: UnwrapRef<typeof import('vue')['isReactive']>
    readonly isReadonly: UnwrapRef<typeof import('vue')['isReadonly']>
    readonly isRef: UnwrapRef<typeof import('vue')['isRef']>
    readonly markRaw: UnwrapRef<typeof import('vue')['markRaw']>
    readonly nextTick: UnwrapRef<typeof import('vue')['nextTick']>
    readonly onActivated: UnwrapRef<typeof import('vue')['onActivated']>
    readonly onBeforeMount: UnwrapRef<typeof import('vue')['onBeforeMount']>
    readonly onBeforeRouteLeave: UnwrapRef<typeof import('vue-router')['onBeforeRouteLeave']>
    readonly onBeforeRouteUpdate: UnwrapRef<typeof import('vue-router')['onBeforeRouteUpdate']>
    readonly onBeforeUnmount: UnwrapRef<typeof import('vue')['onBeforeUnmount']>
    readonly onBeforeUpdate: UnwrapRef<typeof import('vue')['onBeforeUpdate']>
    readonly onDeactivated: UnwrapRef<typeof import('vue')['onDeactivated']>
    readonly onErrorCaptured: UnwrapRef<typeof import('vue')['onErrorCaptured']>
    readonly onMounted: UnwrapRef<typeof import('vue')['onMounted']>
    readonly onRenderTracked: UnwrapRef<typeof import('vue')['onRenderTracked']>
    readonly onRenderTriggered: UnwrapRef<typeof import('vue')['onRenderTriggered']>
    readonly onScopeDispose: UnwrapRef<typeof import('vue')['onScopeDispose']>
    readonly onServerPrefetch: UnwrapRef<typeof import('vue')['onServerPrefetch']>
    readonly onUnmounted: UnwrapRef<typeof import('vue')['onUnmounted']>
    readonly onUpdated: UnwrapRef<typeof import('vue')['onUpdated']>
    readonly onWatcherCleanup: UnwrapRef<typeof import('vue')['onWatcherCleanup']>
    readonly provide: UnwrapRef<typeof import('vue')['provide']>
    readonly reactive: UnwrapRef<typeof import('vue')['reactive']>
    readonly readonly: UnwrapRef<typeof import('vue')['readonly']>
    readonly ref: UnwrapRef<typeof import('vue')['ref']>
    readonly resolveComponent: UnwrapRef<typeof import('vue')['resolveComponent']>
    readonly shallowReactive: UnwrapRef<typeof import('vue')['shallowReactive']>
    readonly shallowReadonly: UnwrapRef<typeof import('vue')['shallowReadonly']>
    readonly shallowRef: UnwrapRef<typeof import('vue')['shallowRef']>
    readonly toRaw: UnwrapRef<typeof import('vue')['toRaw']>
    readonly toRef: UnwrapRef<typeof import('vue')['toRef']>
    readonly toRefs: UnwrapRef<typeof import('vue')['toRefs']>
    readonly toTypedSchema: UnwrapRef<typeof import('@vee-validate/valibot')['toTypedSchema']>
    readonly toValue: UnwrapRef<typeof import('vue')['toValue']>
    readonly triggerRef: UnwrapRef<typeof import('vue')['triggerRef']>
    readonly unref: UnwrapRef<typeof import('vue')['unref']>
    readonly useAttrs: UnwrapRef<typeof import('vue')['useAttrs']>
    readonly useCounterStore: UnwrapRef<typeof import('./stores/counter')['useCounterStore']>
    readonly useCssModule: UnwrapRef<typeof import('vue')['useCssModule']>
    readonly useCssVars: UnwrapRef<typeof import('vue')['useCssVars']>
    readonly useField: UnwrapRef<typeof import('vee-validate')['useField']>
    readonly useFieldArray: UnwrapRef<typeof import('vee-validate')['useFieldArray']>
    readonly useFieldError: UnwrapRef<typeof import('vee-validate')['useFieldError']>
    readonly useFieldValue: UnwrapRef<typeof import('vee-validate')['useFieldValue']>
    readonly useForm: UnwrapRef<typeof import('vee-validate')['useForm']>
    readonly useFormErrors: UnwrapRef<typeof import('vee-validate')['useFormErrors']>
    readonly useFormValues: UnwrapRef<typeof import('vee-validate')['useFormValues']>
    readonly useI18n: UnwrapRef<typeof import('vue-i18n')['useI18n']>
    readonly useId: UnwrapRef<typeof import('vue')['useId']>
    readonly useIsFieldDirty: UnwrapRef<typeof import('vee-validate')['useIsFieldDirty']>
    readonly useIsFieldTouched: UnwrapRef<typeof import('vee-validate')['useIsFieldTouched']>
    readonly useIsFieldValid: UnwrapRef<typeof import('vee-validate')['useIsFieldValid']>
    readonly useIsFormDirty: UnwrapRef<typeof import('vee-validate')['useIsFormDirty']>
    readonly useIsFormTouched: UnwrapRef<typeof import('vee-validate')['useIsFormTouched']>
    readonly useIsFormValid: UnwrapRef<typeof import('vee-validate')['useIsFormValid']>
    readonly useIsSubmitting: UnwrapRef<typeof import('vee-validate')['useIsSubmitting']>
    readonly useLink: UnwrapRef<typeof import('vue-router/auto')['useLink']>
    readonly useModel: UnwrapRef<typeof import('vue')['useModel']>
    readonly usePingLazyQuery: UnwrapRef<typeof import('./gql/generated/graphql')['usePingLazyQuery']>
    readonly usePingQuery: UnwrapRef<typeof import('./gql/generated/graphql')['usePingQuery']>
    readonly useResetForm: UnwrapRef<typeof import('vee-validate')['useResetForm']>
    readonly useRoute: UnwrapRef<typeof import('vue-router')['useRoute']>
    readonly useRouter: UnwrapRef<typeof import('vue-router')['useRouter']>
    readonly useSlots: UnwrapRef<typeof import('vue')['useSlots']>
    readonly useSubmitCount: UnwrapRef<typeof import('vee-validate')['useSubmitCount']>
    readonly useSubmitForm: UnwrapRef<typeof import('vee-validate')['useSubmitForm']>
    readonly useTemplateRef: UnwrapRef<typeof import('vue')['useTemplateRef']>
    readonly useValidateField: UnwrapRef<typeof import('vee-validate')['useValidateField']>
    readonly useValidateForm: UnwrapRef<typeof import('vee-validate')['useValidateForm']>
    readonly validate: UnwrapRef<typeof import('vee-validate')['validate']>
    readonly watch: UnwrapRef<typeof import('vue')['watch']>
    readonly watchEffect: UnwrapRef<typeof import('vue')['watchEffect']>
    readonly watchPostEffect: UnwrapRef<typeof import('vue')['watchPostEffect']>
    readonly watchSyncEffect: UnwrapRef<typeof import('vue')['watchSyncEffect']>
  }
}
