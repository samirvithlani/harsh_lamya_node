const { z } = require("zod");

const userValidationSchema = z.object({
  name: z.string().nonempty("Name is required*"),
  age: z.number()
    .int("Age must be an integer.")
    .positive("Age must be positive."),
  email: z.string(),
  hobbies: z.array(z.string()),
  bloodGroup: z
    .enum(["A+", "B+", "A-", "B-"], "Invalid blood group. Choose from A+, B+, A-, B-."),
  department: z
    .string()
    .regex(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i, "Invalid department ID format."),
});

module.exports = userValidationSchema;
