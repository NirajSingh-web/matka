import { Dialog } from "@headlessui/react";
import { useForm } from "react-hook-form";
// import { Market, MarketPayload } from "../types/market";
// import { useCreateMarket, useUpdateMarket } from "../hooks/useMarket";
import { useCreateMarket, useUpdateMarket, type Market, type MarketPayload } from "../hook/useMarket";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  editData?: Market | null;
}

const MarketDialog: React.FC<Props> = ({ isOpen, onClose, editData }) => {
  const { register, handleSubmit, reset } = useForm<MarketPayload>({
    defaultValues: editData || {},
  });

  const createMutation = useCreateMarket();
  const updateMutation = useUpdateMarket();

  const onSubmit = (data: MarketPayload) => {
    if (editData) {
      updateMutation.mutate({ id: editData.id, payload: data });
    } else {
      createMutation.mutate(data);
    }

    onClose();
    reset();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
  {/* Backdrop */}
  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />

  <div className="fixed inset-0 flex items-center justify-center p-4">
    <Dialog.Panel className="w-full max-w-md rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl p-8 text-slate-200">

      {/* Title */}
      <Dialog.Title className="text-xl font-semibold mb-6">
        {editData ? "Update Market" : "Create Market"}
      </Dialog.Title>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

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
          <select
            {...register("status")}
            className="px-4 py-2.5 rounded-lg bg-slate-800 text-slate-200
                       border border-slate-700
                       focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                       outline-none transition"
          >
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>
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