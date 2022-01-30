const response = pm.response.json();

pm.test('Status code is 200', function () {
    pm.response.to.have.status(200);
});

pm.test('Expected response is not empty', function () {
    pm.expect(response).not.to.be.empty
});

pm.test('Expected response has the expected objects', function () {
    pm.expect(Object.keys(response)).to.include("response", "pagination")
});

pm.test('Element from response object is not empty', function () {
    pm.expect(response["response"][0]).not.to.be.empty
});

pm.test('Element from response object has the expected keys', function () {
    let keys = ["_id", "active", "country", "created_at", "custom_attributes", "description", "disable_at", "discovery_url", "duration", "enable_at", "episode", "featured", "foreign_id", "free_audio_stream", "friendly_title", "genre", "has_embedded_cc", "images", "keywords", "language", "marketplace_ids", "mature_content", "on_air", "ott_description", "parental_guidelines_rating", "pass_required", "plan_ids", "playout_ad", "playout_bumper", "playout_slate", "preview_ids", "program_guide_id", "published_at", "purchase_price", "purchase_required", "rating", "redemption_code_required", "registration_required", "related_playlist_ids", "rental_duration", "rental_price", "rental_required", "request_count", "season", "series_id", "site_id", "source_id", "status", "subscription_ads_enabled", "title", "updated_at", "zobject_ids", "crunchyroll_id", "hulu_id", "mrss_id", "kaltura_id", "thumbnails", "transcoded", "vimeo_id", "youtube_id", "short_description", "content_rules", "is_zype_live", "precise_duration", "has_subtitles", "subscription_required"]
    pm.expect(Object.keys(response["response"][0])).to.have.lengthOf(66);
    pm.expect(Object.keys(response["response"][0])).to.deep.equal(keys);
});