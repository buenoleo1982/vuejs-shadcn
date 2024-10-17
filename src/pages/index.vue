<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { useForm } from 'vee-validate'
import * as v from 'valibot'
import { toTypedSchema } from '@vee-validate/valibot'
const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(
    v.object({
      username: v.pipe(v.string()),
    }),
  ),
})

const onSubmit = handleSubmit(values => {
  console.log(values)
})
</script>

<template>
  <main>
    <form class="space-y-6 m-4 w-2/3" @submit="onSubmit">
      <FormField
        v-slot="{ componentField }"
        name="username"
        :validate-on-blur="!isFieldDirty"
      >
        <FormItem>
          <FormLabel>Username</FormLabel>
          <FormControl>
            <Input type="text" placeholder="shadcn" v-bind="componentField" />
          </FormControl>
          <FormDescription> This is your public display name. </FormDescription>
          <FormMessage />
        </FormItem>
      </FormField>
      <Button type="submit"> Submit </Button>
    </form>
  </main>
</template>
