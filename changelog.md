## Changelog for 4/8/23
This package has gone largely unmaintained over a year (almost 2!), so I'm touching it up.

This update is just some general QoL stuff. As always if you have something that 
breaks, create an issue in the repo!

- Touched up the readme, added missing response examples and changed some wording
- Pass error that causes function to fail through Error.cause
- Removed redundant try/catch blocks
- Prevent `axios` from throwing its own error when HttpCode functions got 404s
- Change `status` property in server fetching to `online` like in the actual API response'
- Set hostname to none if server doesn't have one 
