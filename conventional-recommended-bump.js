'use strict'

const parserOpts = require('./parser-opts')

module.exports = {
  parserOpts,

  whatBump: (commits) => {
    let level = 2
    let reason = ''
    let breakings = 0
    let features = 0
    let dataAdds = 0
    let dataRemoves = 0
    let dataChanges = 0
    let dataReplaces = 0

    commits.forEach(commit => {
      if (commit.notes.length > 0) {
        breakings += commit.notes.length
        level = 0
      } else if (commit.type === 'feat') {
        features += 1
        if (level === 2) {
          level = 1
        }
      } else if (commit.type === 'data') {
        if (commit.scope === 'add-row') {
          dataAdds += 1
          if (level === 2) {
            level = 1
          }
        } else if (commit.scope === 'add-column') {
          dataAdds += 1
          if (level === 2) {
            level = 1
          }
        } else if (commit.scope === 'remove-row') {
          dataRemoves += 1
          if (level === 2) {
            level = 1
          }
        } else if (commit.scope === 'remove-column') {
          dataRemoves += 1
          level = 0
        } else if (commit.scope === 'change-values') {
          dataChanges += 1
          // default level is 2, so we don't need to
          // set it to 2 again here.
          // level = 2
        } else if (commit.scope === 'replace') {
          dataReplaces += 1
          level = 0
        }
      }
    })

    reason = 'There'
    if (breakings === 1) {
      reason += ' is'
    } else {
      reason += ' are'
    }

    // mention breaking changes
    reason += ' ' + breakings + ' BREAKING CHANGE'

    // mention features
    reason += ' and ' + features + ' features'

    // mention data additions
    reason += ' and ' + dataAdds + ' data additions'

    // mention data removals
    reason += ' and ' + dataRemoves + ' data removals'

    // mention data changes
    reason += ' and ' + dataChanges + ' data changes'

    // mention data replaces
    reason += ' and ' + dataReplaces + ' data replaces'

    return {
      level: level,
      reason: reason
    }
  }
}
