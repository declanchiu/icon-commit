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
  }
]