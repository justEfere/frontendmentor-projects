import { useState } from "react";
import { useEffect } from "react";


function App() {
  const [filters, setFilters] = useState([]);
  const [allJobs, setAllJobs] = useState([])
  const [jobs, setJobs] = useState([]);


  useEffect(() => {
    async function fetchJobs() {
      const res = await fetch("data.json");
      const data = await res.json();

      setJobs(data);
      setAllJobs(data);
    }

    fetchJobs();
  }, [])

  // re-filter when filters change
  useEffect(() => {
    if (filters.length === 0) {
      setJobs(allJobs);
      return;
    }

    const filtered = allJobs.filter(job => {
      const values = [job.role, job.level, ...job.languages, ...job.tools];
      return filters.every(f => values.includes(f));
    });

    setJobs(filtered);
  }, [filters, allJobs]);

  function handleAddFilter(item) {
    setFilters(f => (f.includes(item) ? f : [...f, item]));
  }

  function handleRemoveFilter(item) {
    setFilters(f => f.filter(i => i !== item));
  }

  function handleClearFilter() {
    setFilters([]);
  }


  return (
    <div className="main">
      <MainHeader />

      {filters?.length > 0 && <BaseSearch filterItems={filters} clearFilter={handleClearFilter} onRemoveFilter={handleRemoveFilter} />}

      <div className="job__listings">
        {jobs?.map(job => <JobListing job={job} key={job.id} onAddFilter={handleAddFilter} />)}
      </div>
    </div>
  );
}

function MainHeader() {

  const [mobileImg] = useState("images/bg-header-mobile.svg");
  const [desktopImg] = useState("images/bg-header-desktop.svg");

  return (
    <div className="main__header">
      <picture className="main__header-pic">
        <source media="(max-width:500px )" srcset={mobileImg} />
        <img className="main__header-img" src={desktopImg} alt="" />
      </picture>
    </div>
  )
}

// 
function BaseSearch({ filterItems, clearFilter, onRemoveFilter }) {
  return (

    <div className="main__search" >
      <div className="main__search--items">
        {
          filterItems.map((item, index) => <SearchItem key={index} items={item} removeFilter={onRemoveFilter} />)
        }
      </div>
      <div className="main__search--control">
        <ClearButton onClearFilter={clearFilter} />
      </div>
    </div>

  )
}


// 
function SearchItem({ items, removeFilter }) {

  const [cancelIcon] = useState("images/icon-remove.svg")

  return (
    <div className="search__item">
      <p className="search__item-text">{items}</p>
      <button className="cancel_btn" onClick={() => removeFilter(items)}>
        <img src={cancelIcon} alt="" className="icon_remove" />
      </button>
    </div>
  )
}


// 
function ClearButton({ onClearFilter }) {
  return (
    <button className="link_btn" onClick={onClearFilter}>
      clear
    </button>
  )
}

// 
function JobListing({ job, onAddFilter }) {
  return (
    <div className={`job__listings--item ${job.featured ? 'featured' : ''}`}>
      <div className="job__listings--flexitems">
        <div className="job__listings--details">
          <BaseBrand brandImage={job.logo} />

          <div className="job__listings--content">
            <JobListingHeader statusNew={job.new} statusFeatured={job.featured} jobCompany={job.company} />

            <p className="job__listings--content-heading">
              {job?.position}
            </p>


            <BreadCrumb postedAt={job.postedAt} contractType={job.contract} jobLocation={job.location} />

          </div>
        </div>

        <FilterItem jobRole={job.role} jobLevel={job.level} jobLanguage={job.languages} jobTools={job.tools} newFilter={onAddFilter}
        />

      </div>
    </div>
  )
}

function BaseBrand({ brandImage }) {
  return (
    <div className="job__listings--brand">
      <img src={brandImage} alt="" className="job__listings--brand-img" />
    </div>
  )
}
function JobListingHeader({ statusNew, statusFeatured, jobCompany }) {
  return (
    <div className="job__listings--content-header">
      <p className="job__listings--content-title">{jobCompany}</p>
      {statusNew && <span className="status new">new!</span>}
      {statusFeatured && <span className="status featured">featured</span>}
    </div>
  )
}
function BreadCrumb({ postedAt, contractType, jobLocation }) {
  return (
    <div className="job__listings--breadcrumblist">
      {
        postedAt && <p className="job__listings--breadcrumblist-item">
          {postedAt}
        </p>
      }

      {
        contractType && <p className="job__listings--breadcrumblist-item">
          {contractType} </p>
      }

      {jobLocation && <p className="job__listings--breadcrumblist-item">
        {jobLocation}
      </p>}
    </div>
  )
}
function FilterItem({ jobRole, jobLevel, jobLanguage, jobTools, newFilter }) {
  return (
    <div className="job__listings--item-actions">
      {
        jobRole && <button className="filter_btn" onClick={() => newFilter(jobRole)}>
          {jobRole}
        </button>
      }
      {jobLevel && <button className="filter_btn" onClick={() => newFilter(jobLevel)}>
        {jobLevel}
      </button>}

      {
        jobLanguage.map(language => <button className="filter_btn" key={language} onClick={() => newFilter(language)}>
          {language}
        </button>)
      }
      {
        jobTools.map(tool => <button className="filter_btn" key={tool} onClick={() => newFilter(tool)}>
          {tool}
        </button>)
      }
    </div>
  )
}



export default App;
