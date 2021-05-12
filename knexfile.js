// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/potluck-planner.db3",
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
    migrations: {
      directory: "./data/migrations",
      tableName: "potluck-planner",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },

  testing: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/test.db3",
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
    migrations: {
      directory: "./data/migrations",
      tableName: "test",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL || {
      host: "ec2-34-239-33-57.compute-1.amazonaws.com",
      database: "dfnhgkspmh1tn1",
      user: "jzxeswgqcfbejm",
      password:
        "1ce8a8907dfecdd3739f996580c079294a3b9278e079e4bdb5682011634e9b5f",
    },
    migrations: {
      directory: "./data/migrations",
      tableName: "users",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
};
