SOURCE_BRANCH = "master"
DESTINATION = "./resources/public"

def check_destination
  unless Dir.exist? DESTINATION
    sh "git clone https://#{ENV['GIT_NAME']}:#{ENV['GH_TOKEN']}@github.com/#{USERNAME}/#{REPO}.git #{DESTINATION}"
  end
end
 
desc "Generate the site and push changes to remote origin"
task :deploy do
  # Detect pull request
  if ENV['TRAVIS_PULL_REQUEST'].to_s.to_i > 0
    puts 'Pull request detected. Not proceeding with deploy.'
    exit
  end

  # Configure git if this is run in Travis CI
  if ENV["TRAVIS"]
    sh "git config --global user.name '#{ENV['GIT_NAME']}'"
    sh "git config --global user.email '#{ENV['GIT_EMAIL']}'"
    sh "git config --global push.default simple"
  end

  # Make sure destination folder exists as git repo
  check_destination

  sh "git checkout #{SOURCE_BRANCH}"
  Dir.chdir(DESTINATION) { sh "git checkout #{DESTINATION_BRANCH}" }

  # Generate the site
  sh "bundle exec jekyll build"

  # Commit and push to github
  sha = `git log`.match(/[a-z0-9]{40}/)[0]
  Dir.chdir(DESTINATION) do
    sh "git add --all ."
    sh "git commit -m 'Updating to #{USERNAME}/#{REPO}@#{sha}.'"
    sh "git push --quiet origin #{DESTINATION_BRANCH}"
    puts "Pushed updated branch #{DESTINATION_BRANCH} to GitHub Pages"
  end
end