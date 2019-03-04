Artillery Config:

config:
  target: 'http://localhost:3000'
  phases:
    - duration: 60
      arrivalRate: 1000
  defaults:
    headers:
      x-my-service-auth: '987401838271002188298567'
scenarios:
  - flow:
    - get:
        url: "/stats"


Artillery Output: 

Report @ 15:57:39(-0800) 2019-02-23
Elapsed time: 30 seconds
  Scenarios launched:  3038
  Scenarios completed: 3037
  Requests completed:  3037
  RPS sent: 304.1
  Request latency:
    min: 7.5
    max: 169.9
    median: 15.4
    p95: 42.4
    p99: 84
  Codes:
    200: 3037

Report @ 15:57:49(-0800) 2019-02-23
Elapsed time: 40 seconds
  Scenarios launched:  3291
  Scenarios completed: 3290
  Requests completed:  3290
  RPS sent: 329.43
  Request latency:
    min: 7.1
    max: 206.9
    median: 15.9
    p95: 65.8
    p99: 101
  Codes:
    200: 3290

Report @ 15:57:59(-0800) 2019-02-23
Elapsed time: 50 seconds
  Scenarios launched:  2670
  Scenarios completed: 2671
  Requests completed:  2671
  RPS sent: 267.54
  Request latency:
    min: 8
    max: 364.7
    median: 15.8
    p95: 52.4
    p99: 213.3
  Codes:
    200: 2671

Warning: High CPU usage warning (pids: 29670).
See https://artillery.io/docs/faq/#high-cpu-warnings for details.

Report @ 15:58:09(-0800) 2019-02-23
Elapsed time: 1 minute, 0 seconds
  Scenarios launched:  2980
  Scenarios completed: 2979
  Requests completed:  2979
  RPS sent: 298.3
  Request latency:
    min: 7.6
    max: 447.1
    median: 15
    p95: 95.6
    p99: 263.6
  Codes:
    200: 2979

Warning: High CPU usage warning (pids: 29670).
See https://artillery.io/docs/faq/#high-cpu-warnings for details.

Report @ 15:58:19(-0800) 2019-02-23
Elapsed time: 1 minute, 10 seconds
  Scenarios launched:  2989
  Scenarios completed: 2990
  Requests completed:  2990
  RPS sent: 302.53
  Request latency:
    min: 7.8
    max: 262.6
    median: 15.1
    p95: 109.6
    p99: 202
  Codes:
    200: 2990

Report @ 15:58:29(-0800) 2019-02-23
Elapsed time: 1 minute, 20 seconds
  Scenarios launched:  3128
  Scenarios completed: 3128
  Requests completed:  3128
  RPS sent: 313.11
  Request latency:
    min: 8
    max: 320.5
    median: 14.2
    p95: 78.3
    p99: 155.3
  Codes:
    200: 3128

Warning: High CPU usage warning (pids: 29670).
See https://artillery.io/docs/faq/#high-cpu-warnings for details.

Report @ 15:58:39(-0800) 2019-02-23
Elapsed time: 1 minute, 30 seconds
  Scenarios launched:  3343
  Scenarios completed: 3343
  Requests completed:  3343
  RPS sent: 334.97
  Request latency:
    min: 6.8
    max: 228
    median: 13.3
    p95: 59.5
    p99: 156.5
  Codes:
    200: 3343

Warning: High CPU usage warning (pids: 29670).
See https://artillery.io/docs/faq/#high-cpu-warnings for details.

Report @ 15:58:49(-0800) 2019-02-23
Elapsed time: 1 minute, 40 seconds
  Scenarios launched:  3507
  Scenarios completed: 3506
  Requests completed:  3506
  RPS sent: 351.05
  Request latency:
    min: 7.4
    max: 196.5
    median: 13.6
    p95: 24.2
    p99: 172.6
  Codes:
    200: 3506

Report @ 15:58:59(-0800) 2019-02-23
Elapsed time: 1 minute, 50 seconds
  Scenarios launched:  3228
  Scenarios completed: 3227
  Requests completed:  3227
  RPS sent: 323.12
  Request latency:
    min: 7.9
    max: 221.9
    median: 14.4
    p95: 61.3
    p99: 138.2
  Codes:
    200: 3227

Warning: High CPU usage warning (pids: 29670).
See https://artillery.io/docs/faq/#high-cpu-warnings for details.

Report @ 15:59:09(-0800) 2019-02-23
Elapsed time: 2 minutes, 0 seconds
  Scenarios launched:  3230
  Scenarios completed: 3232
  Requests completed:  3232
  RPS sent: 323.32
  Request latency:
    min: 8.1
    max: 216.4
    median: 14.1
    p95: 83.9
    p99: 149.5
  Codes:
    200: 3232

Warning: High CPU usage warning (pids: 29670).
See https://artillery.io/docs/faq/#high-cpu-warnings for details.

Report @ 15:59:19(-0800) 2019-02-23
Elapsed time: 2 minutes, 10 seconds
  Scenarios launched:  3239
  Scenarios completed: 3240
  Requests completed:  3240
  RPS sent: 324.55
  Request latency:
    min: 8
    max: 290.8
    median: 15
    p95: 96.7
    p99: 145
  Codes:
    200: 3240

Warning: High CPU usage warning (pids: 29670).
See https://artillery.io/docs/faq/#high-cpu-warnings for details.

Report @ 15:59:29(-0800) 2019-02-23
Elapsed time: 2 minutes, 20 seconds
  Scenarios launched:  3411
  Scenarios completed: 3411
  Requests completed:  3411
  RPS sent: 341.44
  Request latency:
    min: 7.7
    max: 173.5
    median: 12.5
    p95: 46.3
    p99: 132.6
  Codes:
    200: 3411

Report @ 15:59:39(-0800) 2019-02-23
Elapsed time: 2 minutes, 30 seconds
  Scenarios launched:  3423
  Scenarios completed: 3423
  Requests completed:  3423
  RPS sent: 342.99
  Request latency:
    min: 7.9
    max: 165.7
    median: 12.2
    p95: 67.5
    p99: 143.4
  Codes:
    200: 3423

Warning: High CPU usage warning (pids: 29670).
See https://artillery.io/docs/faq/#high-cpu-warnings for details.

Report @ 15:59:49(-0800) 2019-02-23
Elapsed time: 2 minutes, 40 seconds
  Scenarios launched:  3475
  Scenarios completed: 3471
  Requests completed:  3471
  RPS sent: 348.2
  Request latency:
    min: 6.9
    max: 199.8
    median: 12.6
    p95: 73.8
    p99: 145.6
  Codes:
    200: 3471

Warning: High CPU usage warning (pids: 29670).
See https://artillery.io/docs/faq/#high-cpu-warnings for details.

Report @ 15:59:59(-0800) 2019-02-23
Elapsed time: 2 minutes, 50 seconds
  Scenarios launched:  3572
  Scenarios completed: 3575
  Requests completed:  3575
  RPS sent: 357.56
  Request latency:
    min: 7.2
    max: 185.1
    median: 12.6
    p95: 51.3
    p99: 116.9
  Codes:
    200: 3575

Warning: High CPU usage warning (pids: 29670).
See https://artillery.io/docs/faq/#high-cpu-warnings for details.

Report @ 16:00:09(-0800) 2019-02-23
Elapsed time: 3 minutes, 0 seconds
  Scenarios launched:  3761
  Scenarios completed: 3760
  Requests completed:  3760
  RPS sent: 376.85
  Request latency:
    min: 6.8
    max: 182
    median: 12
    p95: 67.9
    p99: 151.2
  Codes:
    200: 3760

Report @ 16:00:15(-0800) 2019-02-23
Elapsed time: 3 minutes, 5 seconds
  Scenarios launched:  1933
  Scenarios completed: 1941
  Requests completed:  1941
  RPS sent: 381.66
  Request latency:
    min: 6.7
    max: 258.7
    median: 13.7
    p95: 138.6
    p99: 167.4
  Codes:
    200: 1941

All virtual users finished
Summary report @ 16:00:15(-0800) 2019-02-23
  Scenarios launched:  60000
  Scenarios completed: 60000
  Requests completed:  60000
  RPS sent: 323.61
  Request latency:
    min: 6.7
    max: 642.4
    median: 13.9
    p95: 72.1
    p99: 148.4
  Scenario counts:
    0: 60000 (100%)
  Codes:
    200: 60000

