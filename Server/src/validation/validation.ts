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
      "string.empty": "Market name is required",
    }),

  open_time: Joi.string()
    .pattern(/^([01]\d|2[0-3]):([0-5]\d)$/)
    .required()
    .messages({
      "string.empty": "open_time is required",
      "string.pattern.base": "open_time must be in HH:mm format",
    }),

  close_time: Joi.string()
    .pattern(/^([01]\d|2[0-3]):([0-5]\d)$/)
    .required()
    .messages({
      "string.empty": "close_time is required",
      "string.pattern.base": "close_time must be in HH:mm format",
    }),

  result_time: Joi.string()
    .pattern(/^([01]\d|2[0-3]):([0-5]\d)$/)
    .required()
    .messages({
      "string.empty": "result_time is required",
      "string.pattern.base": "result_time must be in HH:mm format",
    }),

  status: Joi.boolean().optional(),
});