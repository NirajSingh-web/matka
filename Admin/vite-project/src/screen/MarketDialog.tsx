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
      <div className="fixed inset-0 bg-black/30" />
      <div className="fixed inset-0 flex items-center justify-center">
        <Dialog.Panel className="bg-white rounded-xl p-6 w-full max-w-md">
          <Dialog.Title className="text-lg font-bold mb-4">
            {editData ? "Update Market" : "Create Market"}
          </Dialog.Title>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <input
              {...register("market_name", { required: true })}
              placeholder="Market Name"
              className="input"
            />
            <input
              type="time"
              {...register("open_time")}
              className="input"
            />
            <input
              type="time"
              {...register("close_time")}
              className="input"
            />
            <input
              type="time"
              {...register("result_time")}
              className="input"
            />

            <select {...register("status")} className="input">
              <option value="true">Active</option>
              <option value="false">Inactive</option>
            </select>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg"
            >
              {editData ? "Update" : "Create"}
            </button>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default MarketDialog;