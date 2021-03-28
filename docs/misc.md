Misc Notes

Run process in background silenced:
* `firefox </dev/null &>/dev/null &`


Find ports that are listening:

* `lsof -n | grep LISTEN`

or 

* `lsof -i tcp:[PORT]`

Kill processes on a specific port:

* `lsof -ti tcp:5900 | xargs kil

The above didn't really work for me, so I just used the following in conjunction:

* `lsof -i tcp:3000` Assume this returns a pid of 3208
* `kill 3208`



To ping a specific port use something like this:

* `ping -p 3001`
  * `ping -p <port>`











# Links Dump 

[How do I detach a process from Terminal, entirely?](https://superuser.com/questions/178587/how-do-i-detach-a-process-from-terminal-entirely)

[Kill processes on certain ports](https://til.hashrocket.com/posts/e4c8c665a8-find-and-kill-all-processes-listening-on-a-port)

[Different approach on handling node versions](https://phoenixnap.com/kb/update-node-js-version)

