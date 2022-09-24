import { CommitTypeEnum, Commit_Icons } from './commitType';

interface CommitConfig {
  commandName: string;
  description: string;
  icon: string;
}

export const COMMIT_CONFIG: CommitConfig[] = [
  {
    commandName: CommitTypeEnum.fix,
    description: '修复已存在逻辑的缺陷',
    icon: Commit_Icons[CommitTypeEnum.fix]
  },
  {
    commandName: CommitTypeEnum.feat,
    description: '在原有逻辑之上添加的新的功能模块或者新的代码',
    icon: Commit_Icons[CommitTypeEnum.feat]
  },
  {
    commandName: CommitTypeEnum.refactor,
    description: '在原有的逻辑上改变逻辑或者修改原逻辑代码',
    icon: Commit_Icons[CommitTypeEnum.refactor]
  },
  {
    commandName: CommitTypeEnum.doc,
    description: '增删改文档类型的文件',
    icon: Commit_Icons[CommitTypeEnum.doc]
  },
  {
    commandName: CommitTypeEnum.style,
    description: '样式相关的更改',
    icon: Commit_Icons[CommitTypeEnum.style]
  },
  {
    commandName: CommitTypeEnum.ci,
    description: '持续集成配置相关的增删改',
    icon: Commit_Icons[CommitTypeEnum.ci]
  },
  {
    commandName: CommitTypeEnum.test,
    description: '试验相关的代码或者测试代码',
    icon: Commit_Icons[CommitTypeEnum.test]
  },
  {
    commandName: CommitTypeEnum.dead,
    description: '删除无用的代码或者废弃的逻辑',
    icon: Commit_Icons[CommitTypeEnum.dead]
  },
  {
    commandName: CommitTypeEnum.comment,
    description: '在代码添加注解、注释、等标注性信息',
    icon: Commit_Icons[CommitTypeEnum.comment]
  },
  {
    commandName: CommitTypeEnum.structure,
    description: '原有逻辑受到重大修改',
    icon: Commit_Icons[CommitTypeEnum.structure]
  },
  {
    commandName: CommitTypeEnum.hotfix,
    description: '用于生产版本的紧急修复提交',
    icon: Commit_Icons[CommitTypeEnum.hotfix]
  },
  {
    commandName: CommitTypeEnum.init,
    description: '用于初始化项目的提交',
    icon: Commit_Icons[CommitTypeEnum.init]
  },
  {
    commandName: CommitTypeEnum.depend,
    description: '用于项目依赖任何变动的提交',
    icon: Commit_Icons[CommitTypeEnum.depend]
  },
  {
    commandName: CommitTypeEnum.config,
    description: '用于任何一切和项目配置有关的变动（ci 配置除外）',
    icon: Commit_Icons[CommitTypeEnum.config]
  },
  {
    commandName: CommitTypeEnum.version,
    description: '用于提交一个版本的更新标记',
    icon: Commit_Icons[CommitTypeEnum.version]
  }
];