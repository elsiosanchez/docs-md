---
title: Markdown 扩展
icon: plugin
category: Markdown
tags:
  - Markdown
---

## 其他特性

### 自动链接

Markdown 支持比较简短的自动链接形式来处理网址和电子邮件信箱，只要是用尖括号包起来， Markdown 就会自动把它转成链接，链接的文字就和链接位置一样，例如:

```md
<http://example.com/>
```

Markdown 会转为:

```html
<a href="http://example.com/">http://example.com/</a>
```

自动的邮件链接也很类似，只是 Markdown 会先做一个编码转换的过程，把文字字符转成 16 进位码的 HTML 实体，这样的格式可以混淆一些不好的信箱地址收集机器人，例如:

```md
<address@example.com>
```

Markdown 会转成:

```html
<a
  href="&#x6D;&#x61;i&#x6C;&#x74;&#x6F;:&#x61;&#x64;&#x64;&#x72;&#x65;&#115;&#115;&#64;&#101;&#120;&#x61;&#109;&#x70;&#x6C;e&#x2E;&#99;&#111;&#109;"
  >&#x61;&#x64;&#x64;&#x72;&#x65;&#115;&#115;&#64;&#101;&#120;&#x61;&#109;&#x70;&#x6C;e&#x2E;&#99;&#111;&#109;</a
>
```

在浏览器里面，这段字串会变成一个可以点击的「address@example.com」链接。

(这种作法虽然可以混淆不少的机器人，但并无法全部挡下来，不过这样也比什么都不做好些。无论如何，公开你的信箱终究会引来广告信件的。)

### 转义字符

Markdown 可以利用反斜线来插入一些在语法中有其它意义的符号，例如: 如果你想要用星号加在文字旁边的方式来做出强调效果 (但不用 `<em>` 标签) ，你可以在星号的前面加上反斜线:

```md
\*literal asterisks\*
```

Markdown 支持在下面这些符号前面加上反斜线来帮助插入普通的符号:

- `\` 反斜线
- `` ` `` 反引号
- `*` 星号
- `_` 底线
- `{}` 大括号
- `[]` 方括号
- `()` 括号
- `#` 井字号
- `+` 加号
- `-` 减号
- `.` 英文句点
- `!` 惊叹号

## 大部分编辑器通用快捷键

| 输出后的效果  | Markdown   | 快捷键         |
| ------------- | ---------- | -------------- |
| **Bold**      | `**text**` | Ctrl/⌘ + B     |
| _Emphasize_   | `*text*`   | Ctrl/⌘ + I     |
| `Inline Code` | \`code\`   | 选中后 `` ` `` |

## 常见扩展

### 表格

表格是 GFM 标准支持的格式。

|     居中      |         右对齐 | 左对齐         |
| :-----------: | -------------: | :------------- |
| 居中使用`:-:` | 右对齐使用`-:` | 左对齐使用`:-` |
|       b       |      aaaaaaaaa | aaaa           |
|       c       |           aaaa | a              |

### Emoji

Emoji 是 GFM 标准支持的格式，需要通过 `:emoji名称:` 来使用 emoji。

例子: `:smile:` :smile:

你可以在 [Emoji 列表](./emoji/readme.md) 找到所有可用的 Emoji。

### 删除线

你可以使用 `~~delete~~` 来创建类似 ~~delete~~ 的删除线