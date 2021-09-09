require('dotenv').config({ path: './config/dev/.env' });

const { ConnectionString } = require('connection-string');
const cs = new ConnectionString(process.env.POSTGRES_URL);
const {
  user: USERNAME,
  password: PASSWORD,
  HOST = cs.host,
  DATABASE = cs.path && cs.path[0],
  SCHEMA = cs.params && cs.params.schema,
  SCHEMAS = cs.params && cs.params.schemas,
} = cs;

module.exports = {
  flywayArgs: {
    url: `jdbc:postgresql://${HOST}/${DATABASE}`,
    schemas: SCHEMAS || SCHEMA,
    defaultSchema: SCHEMA,
    locations: `filesystem:migrations`,
    user: USERNAME,
    password: PASSWORD,
    table: '__migrations',
    sqlMigrationSuffixes: '.pgsql',
  },
  env: {
    JAVA_ARGS: '-Djava.util.logging.config.file=./conf/logging.properties',
  },
  mavinPlugins: [
    {
      groupId: 'org.slf4j',
      artifactId: 'slf4j-api',
      version: '1.7.25',
      downloadUrl:
        'https://repo1.maven.org/maven2/org/slf4j/slf4j-api/1.7.25/slf4j-api-1.7.25.jar',
    },
    {
      groupId: 'org.slf4j',
      artifactId: 'slf4j-jdk14',
      version: '1.7.25',
    },
  ],
  downloads: {
    storageDirectory: `${__dirname}/tmp`,
    expirationTimeInMs: -1,
  },
};
