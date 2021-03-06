@ECHO OFF

set executable=.\modules\openapi-generator-cli\target\openapi-generator-cli.jar

If Not Exist %executable% (
  mvn clean package
)

REM set JAVA_OPTS=%JAVA_OPTS% -Xmx1024M

echo
set ags=generate -i modules\openapi-generator\src\test\resources\3_0\composed-schemas.yaml -g typescript-axios -o samples\client\petstore\typescript-axios\builds\composed-schemas

java %JAVA_OPTS% -jar %executable% %ags%
