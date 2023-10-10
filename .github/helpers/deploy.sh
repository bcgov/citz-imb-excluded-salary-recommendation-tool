#!/bin/bash

# Use DeploymentConfigs to deploy the application to OpenShift.

oc process -f /home/runner/work/citz-imb-salary-estimate-tool/citz-imb-salary-estimate-tool/OpenShift/templates/$DEPLOYMENT_CONFIG --namespace=$OPENSHIFT_DEV_NAMESPACE \
  -p OPENSHIFT_NAMESPACE=$OPENSHIFT_DEV_NAMESPACE \
  -p APPLICATION_NAME=$APPLICATION_NAME \
  -p OPENSHIFT_SERVER_URL=$OPENSHIFT_SERVER_URL \
  -p IMAGE_REPOSITORY=$IMAGE_REPOSITORY | \
  oc apply -f -
