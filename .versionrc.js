module.exports = {
  types: [
    { type: 'feat', section: '✨ 新功能' },
    { type: 'fix', section: '🐛 Bug修复' },
    { type: 'docs', section: '📝 文档' },
    { type: 'style', section: '💄 样式' },
    { type: 'refactor', section: '♻️ 重构' },
    { type: 'perf', section: '⚡️ 性能优化' },
    { type: 'test', section: '✅ 测试' },
    { type: 'chore', section: '🔨 构建' },
    { type: 'revert', section: '⏪️ 回退' },
    { type: 'build', section: '📦️ 打包' },
    { type: 'ci', section: '🎡 CI配置' }
  ],
  releaseCommitMessageFormat: 'chore(release): {{currentTag}}',
  bumpFiles: [
    {
      filename: 'package.json',
      type: 'json'
    }
  ],
  header: '# 更新日志 \n\n',
  commitUrlFormat: '{{host}}/{{owner}}/{{repository}}/commit/{{hash}}',
  compareUrlFormat: '{{host}}/{{owner}}/{{repository}}/compare/{{previousTag}}...{{currentTag}}',
  issueUrlFormat: '{{host}}/{{owner}}/{{repository}}/issues/{{id}}'
}; 