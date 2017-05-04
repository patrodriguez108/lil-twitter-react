class TweetsController < ApplicationController
  def recent
    tweets = if params[:limit]
               Tweet.ordered.limit(params[:limit]).to_json(methods: :hashtag_names)
             else
               Tweet.ordered_json
             end
    render json: tweets
  end

  def search
    hashtag = Hashtag.where(name: params[:keyword]).first
    if hashtag
      render json: hashtag.tweets.ordered_json
    else
      render :nothing => true, status: 404
    end
  end

  def create
    tweet = Tweet.new
    tweet.content = params[:content] || Faker::Lorem.sentence
    tweet.username ||= Faker::Name.name
    tweet.handle ||= "@" + Faker::Internet.user_name
    tweet.avatar_url ||= Faker::Avatar.image(tweet.username)
    tweet.save

    hashtags_names = String(params[:hashtags]).split(",") || []
    hashtags_names.each do |name|
      hashtag = Hashtag.where(name: name).first_or_create
      tweet.hashtags << hashtag
    end

    render json: tweet.to_json(methods: :hashtag_names)
  end

  private

  def tweet_params
    params.require(:tweet).permit( :content, :username, :handle, :avatar_url )
  end
end
