# -*- encoding: utf-8 -*-
# stub: bourbon 7.3.0 ruby lib

Gem::Specification.new do |s|
  s.name = "bourbon".freeze
  s.version = "7.3.0".freeze

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Christian Reuter".freeze, "Damian Galarza".freeze, "Gabe Berke-Williams".freeze, "Hugo Giraudel".freeze, "Joshua Ogle".freeze, "Kyle Fiedler".freeze, "Phil LaPier".freeze, "Reda Lemeden".freeze, "Tyson Gach".freeze, "Will McMahan".freeze]
  s.date = "2023-01-23"
  s.description = "    Bourbon is a library of pure Sass mixins and functions that are designed to\n    make you a more efficient developer.\n".freeze
  s.email = "design+bourbon@thoughtbot.com".freeze
  s.executables = ["bourbon".freeze]
  s.files = ["bin/bourbon".freeze]
  s.homepage = "https://www.bourbon.io/".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.2.15".freeze
  s.summary = "A lightweight Sass tool set.".freeze

  s.installed_by_version = "3.6.2".freeze

  s.specification_version = 4

  s.add_development_dependency(%q<aruba>.freeze, ["~> 0.14".freeze])
  s.add_development_dependency(%q<css_parser>.freeze, ["~> 1.4".freeze])
  s.add_development_dependency(%q<cucumber>.freeze, ["~> 2.0".freeze])
  s.add_development_dependency(%q<rake>.freeze, [">= 0".freeze])
  s.add_development_dependency(%q<rspec>.freeze, ["~> 3.4".freeze])
  s.add_development_dependency(%q<sass>.freeze, [">= 0".freeze])
  s.add_runtime_dependency(%q<thor>.freeze, ["~> 1.0".freeze])
end
