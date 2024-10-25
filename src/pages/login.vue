<script setup lang="ts">
import { FormField } from '@/components/ui/form'
import * as v from 'valibot'
import type { FieldContext } from 'vee-validate'

const { t } = useI18n()
const { handleSubmit, isFieldDirty } = useForm({
  validationSchema: toTypedSchema(
    v.object({
      username: v.string(),
      password: v.string(),
    }),
  ),
})

const onSubmit = handleSubmit(values => {
  console.log(values)
})
</script>

<template>
  <div>
    <Card className="flex flex-col w-full">
      <CardHeader>
        <CardTitle className="font-bold text-2xl tracking-tighter">
          Acesse nosso sistema
        </CardTitle>
        <CardDescription>
          Utilize suas credenciais para acessar
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form class="flex flex-col gap-5" @submit="onSubmit">
          <FormField
            v-slot="{ field }"
            name="username"
            :validate-on-blur="!isFieldDirty"
          >
            <FloatingLabelInput
              :label="t('auth.username')"
              name="username"
              :component-field="field as unknown as FieldContext"
            />
          </FormField>
          <FormField
            v-slot="{ field }"
            name="password"
            :validate-on-blur="!isFieldDirty"
          >
            <FloatingLabelInput
              :label="t('auth.password')"
              name="password"
              :component-field="field as unknown as FieldContext"
              type="password"
            />
          </FormField>
          <Button type="submit"> {{ t('auth.submit') }} </Button>
        </form>
      </CardContent>
      <CardFooter>
        <p
          className="pt-2 border-t-2 text-center text-muted-foreground text-sm"
        >
          Ao entrar em nossa plataforma você concorda com nossos Termos de Uso e
          Política de Privacidade.
        </p>
      </CardFooter>
    </Card>
  </div>
</template>

<style lang="scss" scoped></style>

<route lang="yml">
meta:
  title: Login
  layout: login
</route>
