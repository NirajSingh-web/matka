import Joi from "joi";
export const createMarketResultSchema = Joi.object({
  market_id: Joi.string().required(),
  symbol: Joi.string().trim().required(),
  result: Joi.string().required(),
  status: Joi.boolean().optional(),
  result_time: Joi.string()
    .pattern(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/)
    .required()
    .messages({
      "string.pattern.base":
        "result_time must be in format YYYY-MM-DD HH:mm:ss (Indian time)"
    })
});
export const createMarketSchema = Joi.object({
  market_name: Joi.string()
    .trim()
    .min(2)
    .max(100)
    .required()
    .messages({
      "string.empty": "Market name is required"
    }),

  open_time: Joi.date()
    .iso()
    .required()
    .messages({
      "date.base": "open_time must be a valid date",
      "any.required": "open_time is required"
    }),

  close_time: Joi.date()
    .iso()
    .greater(Joi.ref("open_time"))
    .required()
    .messages({
      "date.greater": "close_time must be greater than open_time"
    }),

  result_time: Joi.date()
    .iso()
    .greater(Joi.ref("close_time"))
    .required()
    .messages({
      "date.greater": "result_time must be greater than close_time"
    }),

  status: Joi.boolean()
    .optional()
});