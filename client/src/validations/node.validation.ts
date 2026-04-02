import * as Yup from 'yup';

export const nodeSchema = Yup.object({
  name: Yup.string()
    .required('Node name is required')
    .min(2, 'Node name must be at least 2 characters')
    .max(50, 'Node name must be at most 50 characters')
    .matches(/^[a-zA-Z0-9\s-_]+$/, 'Node name contains invalid characters'),
});
