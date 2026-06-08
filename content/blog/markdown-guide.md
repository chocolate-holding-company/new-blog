---
seo_description: "Styling your Markdown and making it look good. This is seo-desciption which is different from the post desciption."
---

> Markdown and MultiMarkdown for writing quicker html articles and posts. Easy to pick up as you will see from this article which explains all you need to know to get you started. Give it a try, forget about the _html_ tags and write quicker and cleaner posts/articles.

> Much of the following article is taken from [daringfireball.net](https://daringfireball.net/projects/markdown/syntax#backslash) and [fletcherpenny.net](http://fletcherpenney.net/multimarkdown/).

---

## How to use Markdown and MultiMarkdown with your theme

Although Markdown and MultiMarkdown can be used to create web pages, it’s probably better to stick with a good code editor to layout the structure of your page and website. Markdown and MultiMarkdown is ideal for writing sections of a web page _ie. a post or article_.

Markdown and MultiMarkdown is cleaner and quicker and highly portable. As well as Markdown and MultiMarkdown syntax you can use html tags which allows the insertion of your theme _classes_, _id's_ etc.

---

## Summary [summary]

[What is Markdown and MultiMarkdown?][whatis]
[Metadata][metadata]
[Cross-references][references]
[Markdown Syntax][syntax]
[Images][images]
[Tables][tables]
[Footnotes][footnotes]
[Citations][citations]
[Definition List][definition]

---

## What is Markdown and MultiMarkdown? [whatis]

To understand what MultiMarkdown is, you first should be familiar with Markdown. The best description of what Markdown is comes from John Gruber’s Markdown website:

> Markdown is a text-to-HTML conversion tool for web writers. Markdown allows you to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML).

> Thus, _Markdown_ is two things: (1) a plain text formatting syntax; and (2) a software tool, written in Perl, that converts the plain text formatting to HTML.

> The overriding design goal for Markdown’s formatting syntax is to make it as readable as possible. The idea is that a Markdown-formatted document should be publishable as-is, as plain text, without looking like it’s been marked up with tags or formatting instructions. While Markdown’s syntax has been influenced by several existing text-to-HTML filters, the single biggest source of inspiration for Markdown’s syntax is the format of plain text email. — [John Gruber](http://daringfireball.net/projects/markdown/)

Markdown is great, but it lacked a few features that would allow it to work with documents, rather than just pieces of a web page. MultiMarkdown extends Markdown’s syntax to work with complete documents that could ultimately be converted from text into other formats, including complete _HTML_ documents, _LaTeX, PDF, ODF,_ or even _Microsoft Word_ documents.

In addition to the ability to work with complete documents and conversion to other formats, the Markdown syntax was lacking a few other things. [Michel Fortin](http://www.michelf.com/projects/php-markdown/extra/) added a few additional syntax features when writing PHP Markdown Extra. Some of his ideas were implemented and expanded on in MultiMarkdown, in addition to including features not available in other Markdown implementations. These features include tables, footnotes, citation support, image and link attributes, cross-references, math support, and more.

You can think of MultiMarkdown as:

1. A program to convert plain text to a fully formatted document.
2. The syntax used in the plain text to describe how to convert it to a complete document.

[Fletcher T. Penney](http://fletcherpenney.net/mmd/)

---

## Metadata [metadata]

MultiMarkdown has support for metadata, meaning that you can include information about a document that is not necessarily part of the document contents.
To use metadata, simply add information to the top of a Markdown file:

::CodeBlock

```markdown
viewport: width=device-width, initial-scale=1.0
Title: A Guide to Markdown and Multi-Markdown
Description: A very good Guide to Markdown and Multi-Markdown.
Date: July 25, 2005
Address: Some Road, Some Town, Some City L67 QPE
Copyright: owner.org
Email: you@youremail.org
Web: https://yourwebsitel.org
Keywords: one, two, three, four, five, six.
css: css/style.css
```

::

The above metadata is the more common metadata information, for more metadata information see [MultiMarkdown Syntax Guide](https://github.com/fletcher/MultiMarkdown/wiki/MultiMarkdown-Syntax-Guide)

> **Note**
> You’d probably include Metadata when writing fresh html pages or Markdown documents. You probably wouldn’t use Metadata when writing posts or sections of a page as the Metadata needs to be in the `header`.

---

## Cross-references [references]

Cross-references will become your new best friend when writing long documents. They will highly improve the navigability of the generated documents by giving the reader links to jump across sections with a single click. As seen in the Summary section of the document.

**Example**
::CodeBlock

```markdown
    Clicking [here][summary] will lead you to the **Summary** section.
```

::

**Result**

Clicking [here][summary] will lead you to the **Summary** section.

---

## Markdown Syntax [syntax]

### Emphasis

    This is *italic* and so is _this_
    This is **bold** and so is __this__

**Result**

This is _italic_ and so is _this_
This is **bold** and so is **this**

---

### Links

**Inline:**

    See [Your Website](https://yourwebsite.org/ "Title") for more information.

**Result**

See [Your Website](https:///yourwebsite.org/ "Visit your website") for more information.

**Reference-style links**

```
(titles are optional):
See [Link name][id] - Then, anywhere else in the doc, define the link:
eg. See [Your Website][your-web] for more information.

[id]: https://link/ "Title" - place anywhere in the document
eg. [your-web]: https://yourwebsite.org/ “Visit Your Website”
```

**Result**

See [Your Website][your-web] for more information.

### Email:

    You should [email me](mailto:you@youremail.org)

    My email address is <me@myemail.org>

**Result**

You should [email me](mailto:you@youremail.org)

My email address is <me@myemail.org>

---

### Headings:

    # This is a heading h1
    ## This is a heading h2
    ### This is a heading h3
    #### This is a heading h4
    ##### This is a heading h5
    ###### This is a heading h6

**Result**

# This is a heading h1

## This is a heading h2

### This is a heading h3

#### This is a heading h4

##### This is a heading h5

###### This is a heading h6

---

### Lists:

**Unordered List**

    * Milk
    * Bread
    * Cheese
    	* Cheddar (4 spaces or tab)
    	* Camembert
    * Rice
    (You can also use - or + instead of *)

**Result**

- Milk
- Bread
- Cheese
  - Cheddar
  - Camembert
- Rice

**Ordered List**

    1. Milk
    2. Bread
    3. Cheese
    	1. Cheddar (4 spaces or tab)
    	2. Camembert
    4. Rice

**Result**

1. Milk
2. Bread
3. Cheese
   1. Cheddar
   2. Camembert
4. Rice

---

### Blockqoutes:

::CodeBlock

```markdown
> Email-style angle brackets
> are used for blockquotes.
>
> > And, they can be nested.
>
> #### Headers in blockquotes
>
> - You can quote a list.
> - Etc.
```

::
**Result**

> Email-style angle brackets
> are used for blockquotes.
>
> > And, they can be nested.
>
> #### Headers in blockquotes
>
> - You can quote a list.
> - Etc.

---

### Code:

    `This is a code span`

**Result**

`This is a code span`

### Pre-formatted Code Blocks

Indent every line of a code block by at least 4 spaces or 1 tab.

    This is a preformatted
    code block.

### Fenced Code Block

Three back-ticks top and bottom
::CodeBlock

```markdown
    {
     "userName": "Your name",
     "email": "you@youremail.com"
    }
```

::

**Result**
::CodeBlock

```markdown
{
"userName": "Your name",
"email": "you@youremail.com"
}
```

::

---

### Super and Subscript

    This is Super^super or the 1^st person wins.

    This is Sub~sub or the 2~nd person loses.

**Result**

This is Super^super or the 1^st person wins.

This is Sub~sub or the 2~nd person loses.

---

### Horizontal Rules

Three or more dashes, underscores or asterisks:

    ----

    * * *

    ____

---

### Manual Line Breaks

End a line with two or more spaces:

Roses are red,
Violets are blue.

---

### Backlash Escapes

Markdown allows you to use backslash escapes to generate literal characters which would otherwise have special meaning in Markdown’s formatting syntax. For example, if you wanted to surround a word with literal asterisks (_instead of an HTML `<em>` tag_), you can use backslashes before the asterisks, like this:

    \*literal asterisks - I'm not italic\*

**Result**

\*literal asterisks - I'm not italic\*

Markdown provides backslash escapes for the following characters:

    \   backslash
    `   backtick
    *   asterisk
    _   underscore
    {}  curly braces
    []  square brackets
    ()  parentheses
    #   hash mark
    +   plus sign
    -   minus sign (hyphen)
    .   dot
    !   exclamation mark

---

## Images [images]

### Inline Images:

    ![alt text](/path/img.jpg "Title") - (titles are optional)

    ![Two Indian Men](two-men.jpg "Two Indian Men")

**Result**

![Two Indian Men](https://phone1st-theme.org/test/test-images/two-indian-men.jpg "Two Indian Men")

**Note** If captions are not required leave the 'alt text' blank

    ![](/path/img.jpg "Title") - (_no 'alt text' = 'no caption'_)

### Reference-style Images:

    ![alt text][id]

    [id]: /url/to/img.jpg "Title" (_placed elsewhere in the document_)

    Example:
    ![Guruvayur][elephant]
    elsewhere in the document:
    [elephant]: elephant.jpg "Guruvayur Elephant Santuary in the Document Footnotes"

**Result**

![Guruvayur][elephant]

### Styled Images

The original image is 200px x 220px as seen in the Inline and Reference images above. We can change the size to 100px x 110px and display it with a image class `img-framed`

    ![Image Framed][img-framed]

    Below can appear anywhere in the document
    [img-framed]: elephant.jpg "Image Framed"
    width="100px" height="110px"
    class="img-framed"

img-framed css class somewhere on the stylesheet

.img-framed {
padding: 1rem;
border-radius: 5px;
border: 1px solid #000;
box-shadow: 2px 2px 2px #848484;
}

**Result**

![Image Framed][img-framed]

[img-framed]: https://phone1st-theme.org/test/test-images/guruvayur.jpg "Image Framed", width="100px" height="110px"
class="img-framed"

Do the same with the class `img-circle`

    ![circle image][image_circle]

    [image_circle]: (https://phone1st-theme.org/test/test-images/two-indian-men.jpg) ""
    width="100px" height="110px"
    class="img-circle"

img-circle class somewhere on the stylesheet

.img-circle {
border-radius: 50rem !important;
}

**Result**

![circle image][image_circle]

[image_circle]: two-men.jpg

width="90px" height="100px"
class="img-circle"

---

## Tables [tables]

Creating tables in html is quite a busy process. Markdown makes creating tables a synch with just a few rules to follow.

Tables are perfect to display structured data in rows and columns. MultiMarkdown supports the generation of tables by using a couple of simple rules alongside the use of the pipe character -- `|`.

    | First Header  | Second Header | Third Header |
    |:------- | :-----------: | -------------------: |
    | First row     | Data          | Very long data entry |
    | Second row    | **Cell**      | *Cell*               |
    | Third row     | Cell that spans across two columns  ||

**Result**

| First Header |           Second Header            |         Third Header |
| :----------- | :--------------------------------: | -------------------: |
| First row    |                Data                | Very long data entry |
| Second row   |              **Cell**              |               _Cell_ |
| Third row    | Cell that spans across two columns |                      |

### Structure

If you are familiar with HTML tables, you'll instantly recognize the structure of the table syntax. All tables must begin with one or more **rows** of **headers**, and each **row** may have one or more **columns**.

These are the most important rules you'll be dealing with:

- There must be at least one `|` per line;
- After the header rows, there must be a line containing only `|`, `-`, `:`, `.`, or spaces;
- Cell content must be on one line only;
- Columns are separated by `|`.

### Alignment

To align the data cells on the table, you need to introduce a special row right after the headers, that will determine how the following rows -- the data rows -- will be aligned.

    	| Header One | Header Two | Header Three | Header Four |
    	| ---------- | :--------- | :----------: | ----------: |
    	| Default    | Left       | Center       | Right       |
    	| Data        | Data     | Data          | Data       |
    	| 1             | 2           | 3               | 4             |

**Result**

| Header One | Header Two | Header Three | Header Four |
| ---------- | :--------- | :----------: | ----------: |
| Default    | Left       |    Center    |       Right |
| Data       | Data       |     Data     |        Data |
| 1          | 2          |      3       |           4 |

The placing of the colon (`:`) is optional and determines the alignment of columns in the data rows. The second line with the colon's is mandatory and must be placed between the headers and the data rows.

Also, the usage of the `|` at the beginning or end of the rows is optional -- as long as at least one `|` is present in each row.

### Column spanning

To make a cell span across multiple columns, instead of using a single pipe (`|`) character to delimit that cell, use the number of pipes corresponding to the columns you wish to span.

    | Column 1 | Column 2 | Column 3 | Column 4 |
    | -------- | :------: | -------- | -------- |
    | No span  | Span across three columns    |||
    | Data       | Data                                      |||
    | 1            | 2                                            |||

**Result**

| Column 1 |         Column 2          | Column 3 | Column 4 |
| -------- | :-----------------------: | -------- | -------- |
| No span  | Span across three columns |          |          |
| Data     |           Data            |          |          |
| 1        |             2             |          |          |

---

## Footnotes [footnotes]

Footnotes ==are a simple, yet effective== way of conveying non-crucial ~information to the~ reader.

Rather than <mark>parenthesizing</mark> a side note or place it between em-dashes -- as unimportant as it is, the reader will go through it, just like you did now -- you can defer its reading and expand on your thoughts there.

Example

    Clicking this number[^fn-sample_footnote] will lead you to a footnote.

    Place this in the document footer:
    [^fn-sample_footnote]: Handy! Now click the return link to go back.

**Result**

Clicking this number[^fn-sample_footnote] will lead you to a footnote.

---

## Citations [citations]

    This is a statement that should be attributed to its source[p. 23][#Doe:2006].

This is a statement that should be attributed to its source[p. 23][#Doe:2006].

Then add the following description of the reference to be used in the bibliography. (_seen in the Article Footnotes_)

    [#Doe:2006]: John Doe. *Some Big Fancy Book*.  Vanity Press, 2006.

[#Doe:2006]: John Doe. _Some Big Fancy Book_. Vanity Press, 2006.

Your markdown will look like this:

    This is a statement that should be attributed to its source[p. 23][#Doe:2006].
    [#Doe:2006]: John Doe. *Some Big Fancy Book*.  Vanity Press, 2006.

---

## Definition Lists [definition]

    Apple
    :   Pomaceous fruit of plants of the genus Malus in the family Rosaceae.
    :   An american computer company.

    Orange
    :   The fruit of an evergreen tree of the genus Citrus.

**Result**

Apple
: Pomaceous fruit of plants of the genus Malus in the family Rosaceae.
: An american computer company.

Orange
: The fruit of an evergreen tree of the genus Citrus.

---

::CodeBlock

```markdown
Document Footer - hidden - Reference link and image from the article

[your-web]: https://yourwebsite.org/ "Visit Your Website"
[elephant]: elephant.jpg "Guruvayur Elephant Santuary in the Document Footnotes"
```

::

[^fn-sample_footnote]: Handy! Now click the return link to go back.

[your-web]: https://yourwebsite.org/ "Visit Your Website"
[elephant]: https://phone1st-theme.org/test/test-images/guruvayur.jpg "Guruvayur Elephant Santuary in the Document Footnotes"

[^fn-sample_footnote]: Handy! Now click the return link to go back.
