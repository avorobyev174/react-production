import * as commonCommands from './commands/common';
import * as profileCommands from './commands/profile';
import * as articlesCommands from './commands/article';
import * as commentsCommands from './commands/comments';
import * as ratingCommands from './commands/rating';

Cypress.Commands.addAll(commonCommands);
Cypress.Commands.addAll(profileCommands);
Cypress.Commands.addAll(articlesCommands);
Cypress.Commands.addAll(commentsCommands);
Cypress.Commands.addAll(ratingCommands);
// Cypress.Commands.overwrite('intercept', () => {
//   const { FIXTURE_MODE } = process.env;
//   if (FIXTURE_MODE === 'read') {
//
//   }
// });

export {};
