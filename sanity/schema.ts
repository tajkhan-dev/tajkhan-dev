import { type SchemaTypeDefinition } from 'sanity'
import { projectSchema } from './projects'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectSchema],
}
