from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in hazardous_item_management/__init__.py
from hazardous_item_management import __version__ as version

setup(
	name="hazardous_substance_management",
	version=version,
	description="This App allows easy management of hazardous item properties.",
	author="Florian Beck",
	author_email="florian.beck@nakt.eu",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
