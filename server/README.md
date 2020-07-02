# Running

### Pre-requisites

- [Postgresql](https://www.postgresql.org/)
- [Ruby v2.5.5](https://www.ruby-lang.org/pt/documentation/installation/)
- [Ruby on Rails v5.2.5](https://guides.rubyonrails.org/v5.0/getting_started.html)

### Check your Ruby version

```shell
ruby -v
```

The ouput should start with something like `ruby 2.5.5`

If not, install the right ruby version using [rbenv](https://github.com/rbenv/rbenv) (it could take a while):

```shell
rbenv install 2.5.5
```

### Install dependencies

```shell
bundle install
```

### Initialize the database

```shell
rake db:create db:migrate
```

### Set credentials to your postgresql

Check application.yml and set your credentials, by default username and password are set to 'admin'

## :information_source: How to Use

```shell
rails s -p 3001
```
