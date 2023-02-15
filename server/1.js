// import { scheduleJob, scheduledJobs } from "node-schedule"
import { scheduleJob } from 'node-schedule';

// // Set the deadline date and time
// const deadline = new Date('2023-03-01T00:00:00Z');

// // Set the initial delay for the task
// const delay = 6 * 60 * 60 * 1000; // 6 hours in milliseconds

// // Schedule the task to run every 6 hours until the deadline
// const task = schedule.scheduleJob(new Date(Date.now() + delay), function() {
//   const now = new Date();
//   if (now < deadline) {
//     console.log('Task runs every 6 hours');
//     // Add your task logic here
//     const nextDelay = 6 * 60 * 60 * 1000; // 6 hours in milliseconds
//     task.reschedule(new Date(now.getTime() + nextDelay));
//   } else {
//     console.log('Deadline reached. Task stopped.');
//     task.cancel();
//   }
// });

let a = new Date().getTime()
console.log(a)
let b = a/4
console.log(b)

    scheduleJob(b,()=>{
        console.log("a")
    })
