export enum CommitTypeEnum {
  fix = "fix",
  feat = "feat",
  refactor = "refactor",
  doc = "doc",
  style = "style",
  ci = "ci",
  dead = "dead",
  comment = 'comment',
  structure = 'structure',
  test = 'test',
  hotfix = 'hotfix',
  init = 'init',
  depend = 'depend',
  config = 'config',
  version = 'version',
  type = "type"
}

export const Commit_Icons = {
  [CommitTypeEnum.fix]: '🐛',
  [CommitTypeEnum.feat]: '✨',
  [CommitTypeEnum.refactor]: '♻️',
  [CommitTypeEnum.doc]: '📝',
  [CommitTypeEnum.style]: '🎨',
  [CommitTypeEnum.ci]: '👷',
  [CommitTypeEnum.dead]: '🗑',
  [CommitTypeEnum.comment]: '💡',
  [CommitTypeEnum.structure]: '🏗️',
  [CommitTypeEnum.test]: '🧪',
  [CommitTypeEnum.hotfix]: '🔥',
  [CommitTypeEnum.init]: '🎉',
  [CommitTypeEnum.depend]: '🧱',
  [CommitTypeEnum.config]: '🔧',
  [CommitTypeEnum.version]: '🎯',
  [CommitTypeEnum.type]: '🌀',
};

export const Tag_Icon = '🔖';