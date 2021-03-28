```r (bash)
#!/bin/bash
TARGET="/var/www/<directory>"
GIT_DIR="/srv/git/repositories/<directory>.git"
BRANCH="master"
KEYTAR="/srv/git/keys/<directory>/<directory>"



while read oldrev newrev ref
do
        # only checking out the master (or whatever branch you would like to deploy)
        if [ "$ref" = "refs/heads/$BRANCH" ]; then
                if [ ! -d $TARGET ]; then
                        echo "Directory not found, creating appropriate directory."
                        mkdir -p $TARGET && echo "Directory creation successful" || { echo "Error in creating directory. Now exiting"; exit 1; }
                        git worktree add $TARGET
                else
                        echo "Directory found! Executing the rest of the hook."
                fi
                echo "Ref $ref received. Deploying ${BRANCH} branch to production..."
                git --work-tree=$TARGET --git-dir=$GIT_DIR checkout -f $BRANCH
                echo "Base built, now installing packages and building production directory"
                cd $TARGET && yarn install && yarn build
                echo "Build Finished, now grabbing keys"
                cd $TARGET && cp -r $KEYTAR ./
                echo "...starting service"
                pm2 start ecosystem.config.js
                pm2 save
                echo "Service Started and Saved!!"
                echo "Finished Scripts!!"               
        else
                echo "Ref $ref received. Doing nothing: only the ${BRANCH} branch my be deployed on this server."
        fi
done
```