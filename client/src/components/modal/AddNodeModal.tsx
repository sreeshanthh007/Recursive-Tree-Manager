import { useEffect } from 'react';
import { useFormik } from 'formik';
import { nodeSchema } from '@/validations/node.validation';
import { Button } from '@/components/ui/button';
import { X, PlusCircle, AlertCircle } from 'lucide-react';

interface AddNodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (name: string) => void;
  title?: string;
  placeholder?: string;
}

export const AddNodeModal = ({
  isOpen,
  onClose,
  onAdd,
  title = 'Add New Node',
  placeholder = 'Enter node name...',
}: AddNodeModalProps) => {

  
  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema: nodeSchema,
    onSubmit: (values) => {
      onAdd(values.name.trim());
      onClose();
    },
  });

  useEffect(() => {
    if (isOpen) {
      formik.resetForm();
    }
  }, [isOpen, formik]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all duration-300">
      <div 
        className="bg-white dark:bg-gray-900 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200"
        onKeyDown={(e) => e.key === 'Escape' && onClose()}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="p-3 bg-primary/10 rounded-full text-primary">
              <PlusCircle size={24} />
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-8 w-8 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            >
              <X size={20} />
            </Button>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                {title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                Please provide a descriptive name for the new node.
              </p>
            </div>

            <div className="space-y-2">
              <div className="relative group">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoFocus
                  className={`w-full px-5 py-4 bg-gray-50 dark:bg-gray-800 border-2 rounded-2xl focus:bg-white dark:focus:bg-gray-800/50 focus:ring-0 transition-all outline-none text-lg font-medium ${
                    formik.touched.name && formik.errors.name
                      ? 'border-destructive/50 focus:border-destructive'
                      : 'border-gray-100 dark:border-gray-700 focus:border-primary'
                  }`}
                  placeholder={placeholder}
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.name && formik.errors.name && (
                <div className="flex items-center gap-2 text-destructive text-sm font-semibold mt-1 animate-in slide-in-from-top-1 duration-200">
                  <AlertCircle size={14} />
                  <span>{formik.errors.name}</span>
                </div>
              )}
            </div>

            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1 py-6 rounded-2xl font-bold active:scale-95 transition-all text-gray-600 dark:text-gray-300"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={!formik.isValid || !formik.dirty}
                className="flex-1 py-6 rounded-2xl font-bold shadow-xl shadow-primary/20 active:scale-95 transition-all bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:grayscale"
              >
                Create Node
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
