class tourApi {
    constructor(query , queryString){
        this.query = query
        this.queryString = queryString
    }

    filter(){
        const reqObj = {...this.queryString}
        const excludedPoints = ["sort" , "limit" , "page" , "fields" ]
        excludedPoints.forEach(ele => delete reqObj[ele])
        let reqString = JSON.stringify(reqObj)
        reqString = reqString.replace(/\b(gt|gte|lt|lte)\b/g , match =>`$${match}`)
        const modReqObj = JSON.parse(reqString)
        this.query = this.query.find(modReqObj)
        return this
    }

    sorting(){
         if(this.queryString.sort){
            const sortBy = this.queryString.sort.split(",").join(" ")
            this.query = this.query.sort(sortBy )
        }
        return this
    }

    fields(){
        if(this.queryString.fields){
            const fields = this.queryString.fields.split(",").join(" ")
            this.query = this.query.select(fields)
        }
        return this
    }

    pagination(){
        const page = this.queryString.page *1
        const limit = this.queryString.limit *1
        const skip = (page - 1 ) * limit
        this.query = this.query.skip(skip).limit(limit)
        return this
    }
}

module.exports = tourApi