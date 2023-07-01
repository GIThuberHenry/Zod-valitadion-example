const {z} = require('zod');

const userSchema = z.object({
    name: z.string().min(3).max(255),
    nim: z.number().int().positive().min(10000,'digit kurang dari 5').max(100000,'angka lebih dari 5'),
    angkatan: z.number().min(2023, 'hanya khusus 2023'),
    email: z.string('bukan string').email('bukan email').endsWith('@student.umn.ac.id', 'harus email student'),
})

exports.userSchema = userSchema;