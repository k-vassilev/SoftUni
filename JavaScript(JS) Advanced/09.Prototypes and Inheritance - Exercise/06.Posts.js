function solve () {
    class Post{
        constructor(title,content) {
            this.title = title;
            this.content = content
        }
        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`
        }
    }
    class SocialMediaPost extends Post {
        constructor(title,content,likes,dislikes) {
            super(title,content)
            this.likes = Number(likes)
            this.dislikes = Number(dislikes)
            this.comments = []
        }
        addComment(comment) {
            this.comments.push(comment)
        }
        toString() {
            let thisResult = super.toString() + `\nRating: ${this.likes-this.dislikes}`
            if (this.comments.length>0) {
                thisResult+=`\nComments:\n`
                for (let comment of this.comments) {
                    thisResult+=` * ${comment}\n`
                }
            }
            return thisResult.trim()
        }
    }
    class BlogPost extends Post {
        constructor(title,content,views) {
            super(title,content)
            this.views = Number(views)
    
        }
        view() {
            this.views++
            return this
        }
        toString() {
            let result = super.toString() + `\nViews: ${this.views}`
            return result
        }
    }

    return {Post,SocialMediaPost,BlogPost}
}

let post = new Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

