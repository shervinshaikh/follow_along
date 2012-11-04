class CreateIdentitiesTable < ActiveRecord::Migration
  def change
    create_table "identities" do |t|
      t.string   "email"
      t.string   "gravatar"
      t.string   "session_id"
      t.datetime "created_at"
      t.datetime "updated_at"
    end
  end
end
