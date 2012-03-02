# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20120229220137) do

  create_table "formats", :force => true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "genres", :force => true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "genres_media", :id => false, :force => true do |t|
    t.integer "genre_id"
    t.integer "medium_id"
  end

  create_table "images", :force => true do |t|
    t.integer  "medium_id"
    t.string   "file"
    t.string   "description"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "languages", :force => true do |t|
    t.text     "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "languages_ownerships", :id => false, :force => true do |t|
    t.integer "language_id"
    t.integer "ownership_id"
  end

  create_table "media", :force => true do |t|
    t.string   "title"
    t.text     "plot"
    t.integer  "year"
    t.integer  "runtime"
    t.text     "comment"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "imdb_id"
    t.string   "imdb_url"
  end

  create_table "ownerships", :force => true do |t|
    t.integer  "medium_id"
    t.integer  "user_id"
    t.string   "location"
    t.boolean  "private"
    t.integer  "format_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "ownerships", ["medium_id", "user_id"], :name => "index_ownerships_on_medium_id_and_user_id", :unique => true

  create_table "users", :force => true do |t|
    t.string   "name"
    t.string   "email",                  :default => "", :null => false
    t.string   "encrypted_password",     :default => "", :null => false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          :default => 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["email"], :name => "index_users_on_email", :unique => true
  add_index "users", ["reset_password_token"], :name => "index_users_on_reset_password_token", :unique => true

end
