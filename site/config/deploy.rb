set :application, "nakedpassword"
set :repository,  "git@github.com:platform45/nakedpassword-www.git"
set :scm, :git
set :domain, '69.164.198.206'

set :user, 'www-data'
ssh_options[:paranoid] = false
set :use_sudo, false

set :deploy_to, "/var/www/#{application}"
role :app, domain
role :web, domain
role :db,  domain, :primary => true