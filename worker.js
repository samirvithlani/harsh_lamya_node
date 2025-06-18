const {Worker} = require("bullmq")
const Redis = require("ioredis")

const redisConnection = new Redis({
    host: "127.0.0.1",
    port: 6379,
    maxRetriesPerRequest: null, // ✅ Required for BullMQ
  });
  
const worker = new Worker(
    "taskQueue",
    async(job)=>{
        console.log(`processing job for ${job.data.name}`)
        await new Promise((resolve)=>setTimeout(resolve,10000))
        console.log(`done job for ${job.data.name}`)
    },
    {connection:redisConnection}
)
worker.on("completed",(job)=>{
    console.log(`job ${job.id} completed..`)
})
worker.on("failed",(job,err)=>{
    console.log(`job ${job.id} failed..${err.message}`)
})