SOURCE_BRANCH = "master"
DESTINATION_BRANCH = "gh-pages"
DESTINATION = "./resources/public"
 
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
  unless Dir.exist? (DESTINATION + "/.git")
    sh "git clone https://#{ENV['GIT_NAME']}:#{ENV['GH_TOKEN']}@github.com/brendanator/arimaa.git #{DESTINATION}"
  end

  if `git branch` != SOURCE_BRANCH
    sh "git checkout #{SOURCE_BRANCH}"
  end

  # Generate the site
  puts `lein cljsbuild once prod`

  # Commit and push to github
  sha = `git log`.match(/[a-z0-9]{40}/)[0]
  Dir.chdir(DESTINATION) do
    sh "git checkout #{DESTINATION_BRANCH}"
    sh "git add --all ."
    sh "git commit -m 'Updating to brendanator/arimaa@#{sha}.'"
    sh "git push --quiet origin #{DESTINATION_BRANCH}"
    puts "Pushed updated branch #{DESTINATION_BRANCH} to GitHub Pages"
  end
end