<script setup lang="ts">
import { FormField } from '@/components/ui/form'

import { toTypedSchema } from '@vee-validate/valibot'
import * as v from 'valibot'
import { useForm } from 'vee-validate'

const { result, loading, error, refetch } = usePingQuery()

const data = computed(() => result.value)

const { handleSubmit, isFieldDirty } = useForm({
  validationSchema: toTypedSchema(
    v.object({
      username: v.string(),
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
    <div>
      <h2>Ping Example</h2>
      <p v-if="loading">Loading...</p>
      <p v-else-if="error">Error: {{ error.message }}</p>
      <p v-else>Ping result: {{ data?.ping }}</p>
      <Button type="button" @click="refetch">Refetch</Button>
    </div>
  </main>
</template>
