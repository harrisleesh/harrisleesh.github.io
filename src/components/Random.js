import {StaticImage} from "gatsby-plugin-image";
import {Link} from "gatsby";
import * as React from "react"

const Random = (posts)=>{
    var rand = Math.floor(Math.random()*posts?.posts?.length);
    var rValue = posts?.posts[rand];
    return (
        <div>
        <Link to={rValue.fields.slug}>
            <StaticImage src="../images/twitter.png"
                         width={30}
                         alt="git icon"/>
        </Link>
        </div>
    )
}

export default Random;