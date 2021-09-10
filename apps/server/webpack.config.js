module.exports = (config, _context) => {
  const tsLoader = config.module.rules.find(r =>
    r.loader.includes('ts-loader'),
  );

  if (tsLoader) {
    tsLoader.options.transpileOnly = false;
    tsLoader.options.getCustomTransformers = program => {
      return {
        before: [
          require('@nestjs/swagger/plugin').before(
            {
              dtoFileNameSuffix: ['.dto.ts', '.ro.ts', '.entity.ts'],
              classValidatorShim: true,
              introspectComments: true,
            },
            program,
          ),
        ],
      };
    };
  }

  return config;
};
