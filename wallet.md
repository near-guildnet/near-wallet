Make a configuration file like below at `/etc/systemd/system/wallet.service`.

```
[Unit]
Description=Guildnet Wallet

[Service]
ExecStart=/usr/bin/yarn start

WorkingDirectory=/guildnet/wallet
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=wallet
User=wallet
Group=wallet
Environment=NODE_VERSION=10
Restart=always
RestartSec=60

[Install]
WantedBy=multi-user.target
```

Enable the service.
```shell
sudo systemctl enable wallet.service
Created symlink from /etc/systemd/system/multi-user.target.wants/wallet.service to /etc/systemd/system/wallet.service.
```

Show service status
```shell
sudo systemctl status wallet
```

Reload service after changing
```shell
sudo systemctl daemon-reload
```

Restart the service
```shell
sudo systemctl restart wallet
```

Show logs
```shell
tail -f /var/log/syslog
```
