import { Dialog } from "@headlessui/react";
import { Controller, useForm } from "react-hook-form";
// import { Market, MarketPayload } from "../types/market";
// import { useCreateMarket, useUpdateMarket } from "../hooks/useMarket";
import { useCreateMarket, useUpdateMarket, type Market, type MarketPayload } from "../hook/useMarket";
import { toast } from "react-toastify";
import type { AxiosError } from "axios";
interface Props {
  isOpen: boolean;
  onClose: () => void;
  editData?: Market | null;
  refetch: () => void;
}

const MarketDialog: React.FC<Props> = ({ isOpen, onClose, editData, refetch }) => {
  const { register, handleSubmit, reset, control } = useForm<MarketPayload>({
    defaultValues: editData || {},
  });

  const createMutation = useCreateMarket();
  const updateMutation = useUpdateMarket();
  const query = {
    onSuccess: () => {
      onClose();
      reset();
      refetch?.();
      toast.success("market created SuccessFully")
    },
    onError: (e: AxiosError) => {
      const error = e.response?.data as any;
      toast.error(error.message || error.error)
    }
  }
  const onSubmit = (data: MarketPayload) => {
    if (editData) {
      updateMutation.mutate({ id: editData.id, payload: data }, query);
    } else {
      createMutation.mutate(data, query);
    }
  };
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl p-8 text-slate-200 custom-scrollbar max-h-[80vh]">

          {/* Title */}
          <Dialog.Title className="text-xl font-semibold mb-6">
            {editData ? "Update Market" : "Create Market"}
          </Dialog.Title>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 ">

            {/* Market Name */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-slate-400">Market Name</label>
              <input
                {...register("market_name", { required: true })}
                className="px-4 py-2.5 rounded-lg bg-slate-800 text-slate-200
                       border border-slate-700
                       focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                       outline-none transition"
              />
            </div>

            {/* Open Time */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-slate-400">Open Time</label>
              <input
                type="time"
                {...register("open_time")}
                className="px-4 py-2.5 rounded-lg bg-slate-800 text-slate-200
                       border border-slate-700
                       focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                       outline-none transition"
              />
            </div>

            {/* Close Time */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-slate-400">Close Time</label>
              <input
                type="time"
                {...register("close_time")}
                className="px-4 py-2.5 rounded-lg bg-slate-800 text-slate-200
                       border border-slate-700
                       focus:border-purple-500 focus:ring-1 focus:ring-purple-500
                       outline-none transition"
              />
            </div>

            {/* Result Time */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-slate-400">Result Time</label>
              <input
                type="time"
                {...register("result_time")}
                className="px-4 py-2.5 rounded-lg bg-slate-800 text-slate-200
                       border border-slate-700
                       focus:border-pink-500 focus:ring-1 focus:ring-pink-500
                       outline-none transition"
              />
            </div>

            {/* Status */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-slate-400">Status</label>
              <Controller
                name="status"
                control={control}
                render={({ field }) => (
                  <div
                    onClick={() => field.onChange(!field.value)}
                    className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer
                        transition-colors duration-300
                        ${field.value ? "bg-green-500" : "bg-gray-400"}`}
                  >
                    <div
                      className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300
                          ${field.value ? "translate-x-7" : "translate-x-0"}`}
                    />
                  </div>
                )}
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="w-1/2 py-2.5 rounded-lg border border-slate-700 
                       text-slate-400 hover:bg-slate-800 transition"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="w-1/2 py-2.5 rounded-lg font-medium text-white
                       bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                       hover:opacity-90 transition duration-200 shadow-md"
              >
                {editData ? "Update" : "Create"}
              </button>
            </div>

          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default MarketDialog;